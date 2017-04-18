import React from 'react'

class PaymentForm extends React.Component {

  constructor() {
    super();
    this.state = {
      number: "",
      expiry:"",
      cvc: "",
      name:"",
      error :""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.stripeResponseHandler = this.stripeResponseHandler.bind(this);
  }

 handleChange(event) {
   console.log(event.target);
    this.setState({
      [event.target.name] : event.target.value
    });
  }

 
  handleSubmit(event) {
    console.log('Formulaire submitted: ', this.state.number,this.state.expiry,this.state.cvc);
    event.preventDefault();

    // Create a Stripe client
    Stripe.setPublishableKey('pk_test_8xAO9MLDK5jF8zlMJwSBqKKr');

        Stripe.card.validateExpiry(this.state.expiry);
        Stripe.card.createToken({
        number: this.state.number,
        cvc: this.state.cvc,
        exp: this.state.expiry,
        name : this.state.name
        }, this.stripeResponseHandler);
  }

  stripeResponseHandler(status, response) {
    console.log(response);
    if (response.error) { // Problem!

      // Show the errors on the form:
      this.setState({
        error : response.error.message
      });

    } else { // Token created!

      // Get the token ID:
      var token = response.id;

      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
      var myRequest = new Request('/charge', {method: 'POST', body: "stripeToken="+token, headers:myHeaders});
        return fetch(myRequest,)
          .then((response) => response.json())
          .then((responseJson) => {
          console.log("responseJson ",responseJson.value);
            this.setState({
              error : responseJson.value
            });
          })
          .catch((error) => {
            console.log("error ",error);
            this.setState({
              error : error
            });
          });
    }
  }



  render() {
    return (
      <form id="payment-form" onSubmit={this.handleSubmit} action="/charge" method="POST">

  <div className="container-fluid grid">
    
    <div className="row pull-center">
      <div className="col-md-4">

        <div className="well">

          <div className="row card">
          </div>

          <br/>

          <div className="row-fluid">
            <div className="col-md-8">
              <div className="form-group">
                <label>Credit Card Number </label>
                <input type="text" value={this.state.number} onChange={this.handleChange} id="card-number" name="number" className="form-control" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Expiration</label>

                <input type="text" value={this.state.expiry} onChange={this.handleChange} id="card-expiry" placeholder="MM/YY" name="expiry" className="form-control" />

              </div>
            </div>
          </div>

          <div className="row-fluid">
            <div className="col-md-8">
              <div className="form-group">
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={this.handleChange} name="name" className="form-control" />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">

                <label>CVV </label>

                <input type="text" value={this.state.cvc} onChange={this.handleChange} id="card-cvc" name="cvc" className="form-control" />
              </div>
            </div>
          </div>

          <div className="row ">

            <div className="col-md-12 text-right">
              <button type="submit" className="btn btn-success">Submit</button>
              <button type="button" className="btn btn-info">Clear</button>
            </div>

          </div>

        </div>
      </div>
    </div>
  <div className="bank-errors">
    {this.state.error}
  </div>
  </div>
</form>
    );
  }
}

export default PaymentForm;

/*
<form name="form1" method="post" action="contact.php">
   <div class="row">
      <div class="col-md-4">
         <div class="form-group">
            <input type="text" class="form-control input-lg" name="name" id="name" placeholder="Numéro de carte" required="required" />
         </div>
      </div>
      <div class="col-md-3">
         <div class="form-group">
            <select required="required">
               <option>mois</option>
               <option>1</option>
               <option>2</option>
               <option>3</option>
               <option>4</option>
               <option>5</option>
               <option>6</option>
               <option>7</option>
               <option>8</option>
               <option>9</option>
               <option>10</option>
               <option>11</option>
               <option>12</option>
            </select>
         </div>
      </div>
      <div class="col-md-3">
         <div class="form-group">
            <select required="required">
               <option>année</option>
               <option>2017</option>
               <option>2018</option>
               <option>2019</option>
               <option>2020</option>
            </select>
         </div>
      </div>
      <div class="col-md-2">
         <div class="form-group">
            <input type="text" class="form-control input-lg" name="cvc" id="cvc" placeholder="cryptogramme" required="required" />
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-md-12">
         <button type="submit" class="btn btn-skin btn-block" name="submit" id="submit">Valider</button>
      </div>
   </div>
</form>
*/