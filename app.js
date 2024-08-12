var questions = [
    {
        question: "what is the value of <b>result</b>? <br> const array = [1,2,3]<br>const result = array[3]",
        answers:[
            {text:"3",correct:false },
            {text:"throw a syntaxError",correct:false },
            {text:"null",correct:false },
            {text:"undefine",correct:true }
        ]

    },
    {
        question: "which of this is the same as result +=value",
        answers:[
            {text:"result= ++value",correct:false },
            {text:"result = value + value",correct:false },
            {text:"result = result + value ",correct:true },
            {text:"result = value",correct:false }
        ]

    },
    {
        question: "what is the value of <b>result</b>? <br> const result ='2009','1995'; ",
        answers:[
            {text:"null",correct:false },
            {text:"undefine",correct:false },
            {text:"14",correct:true },
            {text:"NaN",correct:false}
        ]

    },
    {
        question:"what is the value of result ? <br> const value = 20.0;<br>const result = Number.isInteger(value);",
        answers:[
            {text:"true", correct:true},
            {text:"false" , correct:false}
        ]
    }
]