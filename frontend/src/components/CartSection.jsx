import React from 'react'

export const CartSection = ({ data }) => {
    //console.log(data);
    return (
        <div className='d-flex justify-content-center align-items-center'>
            {data.map((item, index) => {
                return(
                    <div style={{
                    width: "200px",
                    height: "350px",
                    backgroundColor: "white",

                }}
                >
                    <div>
                    <h6 style={{fontSize: "15px"}} className=' px-2 ' >
                    {item.quantity}
                    </h6>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default CartSection