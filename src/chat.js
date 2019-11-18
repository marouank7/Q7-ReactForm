import React, { Component } from 'react';

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            poster:'',
            comment :''
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);

        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
          };
    }

    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }

      submitForm(e) {
        e.preventDefault();

        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
          };
        const url = "https://post-a-form.herokuapp.com/api/movies/";
        fetch(url, config)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
            alert(res.error);
            } else {
            alert(`Added employee with the ID ${res}!`);
            }
        }).catch(e => {
            console.error(e);
            alert("Error during l'employee addition");
        });

      }

    
       
    


    
      
      

    render () { 
        return ( 
            <div className="FormEmployee">
                <h1> employee’s entry</h1>
                <form onSubmit={this.submitForm}>
                    <fieldset>
                    <legend>Information</legend>
                    <div className="form-data">
                        <label htmlFor="title">Favorite Film</label>
                        <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={this.onChange}
                        value={this.state.title}
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="poster">Link Film</label>
                        <input
                        type="text"
                        id="poster"
                        name="poster"
                        onChange={this.onChange}
                        value={this.state.poster}
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="comment">Comment</label>
                        <textarea   
                        id="comment"
                        name="comment"
                        onChange={this.onChange}
                        value={this.state.comment}>
                        </textarea>
                    </div>
                    <hr />
                    <div className="form-data">
                        <input type="submit" value="Send" />
                    </div>
                    </fieldset>
                 </form>
        </div>
                    
        ); 
    } 
  
}

export default Chat;
