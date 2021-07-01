import React from 'react'

export const Feedback = ({mylist}) => {
    
    return (
        <section className="Right">
            <h3 className="my-3">Top Feedbacks</h3>
            {mylist.length===0? "No Details to display":  
            
            React.Children.toArray(
                mylist.map((item)=>{
                    return (
                      <DataCard newname={item.name} feedback={item.suggestion} />  
                    )
                })
            )
            } 
          
        </section>
    )

    function DataCard({newname, feedback}){
      return(
        <div className = "DataCard">
          <h4>Name : {newname}</h4>
          <h4>Feedback : {feedback}</h4>
        </div>
      )
    }
}