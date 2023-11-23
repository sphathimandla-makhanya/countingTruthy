    
    function truthy_C() {
        //decleared an array of boolean values
        let boolean_Array = [true, true, false, true, false, true, false, true]
        //contructed an function expression
        let aFilter = boolean_Array.filter(truthyCount =>{
            return truthyCount===true
        })  
        return aFilter.length
    }
    
console.log(truthy_C());
    let btn= document.querySelector('[data-btn]')
    btn.addEventListener('click', function () {
        truthy_C()
    })
    let view= document.querySelector('[data-value]')