const cart = [
    {
        'itemName': 'shoes',
        'itemPrice': 1800
    },
    {
        'itemName': 'pants',
        'itemPrice': 1500
    },
    {
        'itemName': 'kurta',
        'itemPrice': 2000
    }
];

let walletBalance= 12000;

createOrder(cart)
    .then(function(orderId){
        return createOrder(orderId);
    })
    .then(function(orderId){
        return proceedToPayement(orderId);
    })
    .then(function(orderStatus){
        return showOrderSummary(orderStatus);
    })
    .then(function(orderHistory){
        return walletBalanceUpdate(orderHistory)
    })
    .then(function(res){
        console.log(res);
    })
    .catch((err)=> {
        console.log(err.message);
    })

function createOrder(cart){
    return new Promise(function(resolve, reject){
        if(!validCart(cart)){
            reject(new Error('cart is not valid'));
        }
        let orderId = 10;
        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            }, 5000);
        }
    })
}

function proceedToPayement(orderId){
    return new Promise(function(resolve,reject){
        if(orderId){
            resolve({paymentStatus : 1 , message: "Payment Successfully completed"});
        }
        else{
            reject(new Error("Something went wrong"));
        }
    })
}

function showOrderSummary(orderStatus){
    return new Promise(function(resolve, reject){
        if(orderStatus.paymentStatus === 1){
            resolve({status: 'success', order : cart});
        }
        else{
            reject(new Error("Cart is empty"))
        }
    })
}

function walletBalanceUpdate(orderHistory) {
    return new Promise(function(resolve, reject){
        if(orderHistory.status === 'success'){
            let currentBalance = 8000;
            walletBalance = walletBalance - currentBalance;
            resolve({balance: walletBalance, status: 'wallet updated'});
        }
        else{
            reject(new Error('wallet not balanced'))
        }
    })
}
function validCart(cart){
    return true;
}
