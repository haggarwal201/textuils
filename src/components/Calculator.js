import React , {useState} from 'react'


export default function Calculator(props) 
{    
    const perform_add =(event)=>
    {  
        // document.addEventListener("click",function aa(){
        //     confirm("you want to add the number")
        // })
        //addEventListener()
        console.log("add was cicked");
        setans(parseInt(n1)+parseInt(n2));
        props.sa("you performed the  opertion" ,'primary')
        
        
       
    }

    const perform_sub =()=>
    {  
        // document.addEventListener("click",function aa(){
        //     confirm("you want to add the number")
        // })
        console.log("sub was cicked");
        setans(parseInt(n1)-parseInt(n2))
        props.sa("you performed the  opertion" ,'primary')
        
       
    }

    const perform_multiply =()=>
    {  
        // document.addEventListener("click",function aa(){
        //     confirm("you want to add the number")
        // })
        console.log("multi was cicked");
        setans(parseInt(n1)*parseInt(n2))
        props.sa("you performed the  opertion" ,'primary')
        
       
    }

    const perform_divide =()=>
    {  
        // document.addEventListener("click",function aa(){
        //     confirm("you want to add the number")
        // })
        console.log("add was cicked");
        setans(parseInt(n1)/parseInt(n2))
        props.sa("you performed the  opertion" ,'primary')
        
       
    }  

    const clear =()=>
    {
        setn1('');
        setn2('');
    }

    const handleonchangen1 =(event)=>{
        console.log("on hange");
        setn1(event.target.value)
    }

    const handleonchangen2 =(event)=>{
        console.log("on hange");
        setn2(event.target.value)
    }
    const [ans,setans]=useState('ce.');
    const [n1,setn1]=useState(0);
    const [n2,setn2]=useState(0);
    
  return ( 
    <div>
        <h1>{props.heading}</h1>

    <div></div>
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Number 1</label>
  <input type="number" value ={n1} onChange={handleonchangen1} class="form-control" id="exampleFormControlInput1" />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Number 2</label>
  <input type="number" value ={n2} onChange={handleonchangen2} class="form-control" id="exampleFormControlInput1" />
</div>
<div className ='container my-4'>
<button className ="btn btn-primary mx-2" onClick={perform_add}><h1>+</h1></button>

<button className ="btn btn-primary mx-2" onClick={perform_sub}><h1>-</h1></button>

<button className ="btn btn-primary mx-2" onClick={perform_divide}><h1>/</h1></button>

<button className ="btn btn-primary mx-2" onClick={perform_multiply}><h1>*</h1></button>

<hr/>
<button className ="btn btn-danger mx-2" onClick={clear}><h1>clear</h1></button>
</div>

<h2>{ans}</h2>

    </div>
  )
}
