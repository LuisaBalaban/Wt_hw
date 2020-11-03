function removeOrderItem(orderInfo, position){
       if(orderInfo.items.length>=0)
        {
            if(orderInfo.items.length>=position)
               { 
                  if(orderInfo.items.hasOwnProperty('quantity')==true && orderInfo.items.hasOwnProperty('price')==true)
                   { 
                       //last 2 tests work if we comment everything except this {}
                    const obj=orderInfo.items[position];
                    orderInfo.total-=obj.price*obj.quantity;
                    orderInfo.items.splice(position, 1);
                    return orderInfo;
                   }
            else throw('Malformed item');
                  
           } else throw('Invalid position');     
            
            
        } else  throw('Items should be an array');
        
         
    
}



const app = {
    removeOrderItem
};

module.exports = app;
