import React, { useState } from "react";
import Category from "../Categories/Category";
import classes from "./Music.module.css";


const Music = (props) => {
    const [music,setCategory] = useState([
        { id: 1, header: "IMPORTANT", news: "Определяет параметры видимости текста в блоке, если текст целиком не помещается в заданную область. Возможны два варианта: текст обрезается; текст обрезается и к концу строки добавляется многоточие. text-overflow работает в том случае, если для блока значение свойства overflow установлено как auto, scroll или hidden.Свойство background-attachment устанавливает, будет ли прокручиваться фоновое изображение вместе с содержимым элемента. Изображение может быть зафиксировано и оставаться неподвижным, либо перемещаться совместно с документом. В CSS3 можно указать несколько значений для ряда фоновых изображений, перечисляя значения через запятую.", img: "https://static3.depositphotos.com/1004325/185/i/600/depositphotos_1853470-stock-photo-news.jpg" },
        { id: 2, header: "VERY IMPORTANT", news: "Определяет параметры видимости текста в блоке, если текст целиком не помещается в заданную область. Возможны два варианта: текст обрезается; текст обрезается и к концу строки добавляется многоточие. text-overflow работает в том случае, если для блока значение свойства overflow установлено как auto, scroll или hidden.Свойство background-attachment устанавливает, будет ли прокручиваться фоновое изображение вместе с содержимым элемента. Изображение может быть зафиксировано и оставаться неподвижным, либо перемещаться совместно с документом. В CSS3 можно указать несколько значений для ряда фоновых изображений, перечисляя значения через запятую.", img: "https://st.depositphotos.com/1152339/1972/i/600/depositphotos_19723583-stock-photo-news-concept-news-on-digital.jpg" },
        { id: 3, header: "VERY VERY IMPORTANT", news: "Определяет параметры видимости текста в блоке, если текст целиком не помещается в заданную область. Возможны два варианта: текст обрезается; текст обрезается и к концу строки добавляется многоточие. text-overflow работает в том случае, если для блока значение свойства overflow установлено как auto, scroll или hidden.Свойство background-attachment устанавливает, будет ли прокручиваться фоновое изображение вместе с содержимым элемента. Изображение может быть зафиксировано и оставаться неподвижным, либо перемещаться совместно с документом. В CSS3 можно указать несколько значений для ряда фоновых изображений, перечисляя значения через запятую.", img: "https://static8.depositphotos.com/1008504/984/i/600/depositphotos_9843276-stock-photo-the-word-news.jpg" }
    ])
  

    let musicContent = Category(music)
    return <div className={classes.blockacc}>
        {musicContent}
    </div>
}

export default Music;