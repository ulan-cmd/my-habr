import React from 'react';
import styles from "./CommentForm.module.css";

class CommentForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name:'',
            text:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.id]:event.target.value
        })

    }

    handleSubmit(){
        let obj = {...this.state}

        console.log(obj);
    }

    render() {
        return (
            <div className={styles.commentsBlocks}>
                <h2 className="comments-blocks-title">Комментарии: <span
                    className="comments-blocks__counter">1</span></h2>
                <div className="comments-blocks-form">
                    <label className={styles.label} htmlFor="name" >Имя</label><br/>
                    <input className={styles.input} id="name" type="text" onChange={this.handleChange}/><br/>
                    <label htmlFor="text">Сообщение</label><br/>
                    <textarea className={styles.textarea} id="text" cols="50" rows="6" onChange={this.handleChange}></textarea><br/>
                    <button className={styles.button} onClick={this.handleSubmit}>Отправить</button>
                </div>
            </div>
        )
    }
}

export default CommentForm;