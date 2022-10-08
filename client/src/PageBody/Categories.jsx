import React from 'react'

let DataCategory=[
    {
        catImgPath:"./images/categories/cat1.png",
        catName:"Fashion",
    },
    {
        catImgPath:"./images/categories/cat2.png",
        catName:"Electronic",
    },
    {
        catImgPath:"./images/categories/cat4.png",
        catName:"Home & Garden",
    },
    {
        catImgPath:"./images/categories/cat5.png",
        catName:"Gifts",
    },
    {
        catImgPath:"./images/categories/cat6.png",
        catName:"Music",
    },
    {
        catImgPath:"./images/categories/cat7.png",
        catName:"ealth & Beauty",
    },
    {
        catImgPath:"./images/categories/cat8.png",
        catName:"Pets",
    },
    {
        catImgPath:"./images/categories/cat9.png",
        catName:"Baby Toys",
    },
    {
        catImgPath:"./images/categories/cat10.png",
        catName:"Groceries",
    },
    {
        catImgPath:"./images/categories/cat11.png",
        catName:"Books",
    },
]
const Categories = () => {
  return (
    <>
        <div className='categories shadow-xl'>
            {
                DataCategory.map((path,index)=>
                {
                    return(
                        <div className="flex category items-center" key={index}> 
                            <img src={path.catImgPath} alt="" />
                            <span>{path.catName}</span>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Categories