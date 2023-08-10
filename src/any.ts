import axios from 'axios';

export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123'

axios.get(url)
  .then(function (response) {
    // 独自の型定義を行うことで、型安全を担保できる
    interface Article{
      id: number;
      title: string;
      description: string;
    }
    // dataの型をArticle[]として定義することで、dataの中身がArticle型の配列であることを明示する
    // 極力any型を使わないようにする
    let data: Article[];
    data = response.data;
    console.log(data);
  })