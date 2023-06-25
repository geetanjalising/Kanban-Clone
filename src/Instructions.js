export const Instructions = ({onDismiss:dismiss}) => {
    return (
        <div 
            className="card_body " 
            style={{zIndex: 2000}}>
          
                <div className="card-header">
                    <span>Instructions</span>
                    <button type="button" className="btn-close5" aria-label="Close" onClick={()=>dismiss()}>X</button>
             </div>
                <hr/>
                <div className="card-body1">
                    <ul>
                        <li>You can add a board and cards by clicking on "Add Board" and "Add cards" respectively.</li>
                        <li>You can delete an item by clicking on triple dot icon.</li>
                        <li>You can drag a card from one board to another.</li>
                        <li>You can add title, description, date, labels and tasks by clicking on card. </li>
                        <li>If any functionality is not working properly, please check your internet connection and refresh the page.</li>
                        <li>Thanks!😊</li>
                    </ul>
                </div>
            
        </div>    
    )
}