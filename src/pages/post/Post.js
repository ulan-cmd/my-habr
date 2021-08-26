import React from 'react';
import styles from  './Post.module.css';
import CommentForm from "../../components/commentForm/CommentForm";

class Post extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            postData:{}
        }
    }

    componentDidMount() {
        this.getPostsById();
    }

    getPostsById(){
        const url = 'http://localhost:3001/posts/' + this.props.match.params.id;

        fetch(url)
            .then(response => {
                if(response.ok){
                    return response.json();
                } else{
                    alert('Ошибочка: Статус: ' + response.status);
                }
            })
            .then(data => this.setState({ postData: data }))
    }


    render(){
        return(
            <div className="postcard-container">
                <div className="postcard-blocks">
                    <div className="postcard_authors">
                        <span className={`${styles.create_name} ${styles.size_100}`}>Тестов Тест</span>
                        <span className="create_date">31.07.2021 19:59</span>
                    </div>
                    <div className="postcard_img">
                        <img className="postcard__img" src={this.state.postData.image} alt=""/>
                    </div>
                    <div className="postcard_title">
                        <h1 style={ {color:'red', marginBottom:'100px'} }>{this.state.postData.title}</h1>
                    </div>
                    <div className="postcard_desc">
                        <p>
                            Если открыть произвольный JPEG-файл в блокноте, то можно увидеть лишь хаотичный набор
                            символов. Отсюда вопрос: возможно ли закодировать изображение так, чтобы его было можно
                            просмотреть не только обычным способом, но и в обычном блокноте, в виде ASCII-графики. Ответ
                            положительный, если использовать максимальное сжатие:

                            Grayscale (только оттенки серого).

                            Обнулить все AC-коэффициенты, то есть весь блок 8x8 пикселей сделать одноцветным.

                            Задать максимальный шаг квантования DC-коэффициента - 255. Это ограничивает цвет всего 9
                            оттенками серого: 0, 32, 64, 96, 128, 160, 192, 224, 255.
                        </p>
                    </div>
                </div>

               <CommentForm/>
            </div>
        )
    }
}

export default Post;