    
    function truthy_C() {
        //decleared an array of boolean values
        let boolean_Array = [true, true, false,true, false, true, false, true]
        //contructed a function expression with containing a condition to filter true values only.
        let aFilter = boolean_Array.filter(truthyCount =>{
            return truthyCount===true
        })  
        return aFilter.length
    }
    // decleared a button variable
    let btn= document.querySelector('[data-btn]')
    // decleared a input variable
    let view= document.querySelector('[data-value]')
    // added an event listner to the button
    btn.addEventListener('click', function () {
        view.value=truthy_C()
    } 
   )
   