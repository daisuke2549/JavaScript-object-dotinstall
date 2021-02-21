/*配列*/


'use strict';

// {
//   // const score1 = 80;
//   // const score2 = 90;
//   // const score3 = 40;

//   const scores = [80, 90, 40];
// //   console.log(scores[0]);


// //   scores[2] = 100;
//   console.log(scores);

//   console.log(scores.length);

// }



// {
//   const scores = [80, 90, 40, 70];
// //   scores.push(10,30);  /*後ろに要素を追加*/
// //   scores.shift();      /*1番前の要素を削除 */
  
//   scores.splice(1, 1, 40, 50, 100);
  



//   for (let i = 0; i < scores.length; i++) {
//     console.log(`Score ${i}: ${scores[i]}`);
//   }



// }




// 'use strict';

// {
//     const otherScores = [10, 20];
//     const scores = [80, 90, 10, 30, ...otherScores];
//     console.log(scores);


//    function sum(a,b){
//        console.log(a+b);
//    }

//   sum(...otherScores);


// }

/*foreach*/
'use strict';

{
    const scores = [10, 20, 40, 90];


    scores.forEach((score, index) => {
        console.log(`Score ${index}: ${score}`);
      });
}



/*クラス*/

'use strict';
// {
//     class Post {
//       constructor(text) {
//         this.text = text;
//         this.likeCount = 0;
//       }
  
//       show() {
//         console.log(`${this.text} - ${this.likeCount}いいね`);
//       }
//     }
  
//     const posts = [
//       new Post('JavaScriptの勉強中…'),
//       new Post('プログラミング楽しい！'),
//     ];
  
//     posts[0].show();
//     posts[1].show();
// }



'use strict';

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
}



let taro = new User("鈴木", 32);
console.log(taro.getName());
console.log(taro.getAge());








/*配列*/
/*配列*/



/*配列*/




