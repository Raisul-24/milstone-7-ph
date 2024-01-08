import { useEffect, useState } from "react";


const Home = () => {
        const [allActors, setAllActors] = useState([]);
        const [selectedActors,setSelectedActors] = useState([]);

        useEffect(() => {
                fetch('data.json')
                        .then(res => res.json())
                        .then(data => setAllActors(data))
        }, [])

        const handleSelectBtn =(actor) =>{
                setSelectedActors([...selectedActors,actor]);
        }

        console.log(selectedActors)
        // console.log(allActors)
        return (
                <div className="container bg-[#F3F3F3] w-full">
                        <h1 className="text-2xl text-center font-bold text-black py-5">Course Registration</h1>
                        <div className="home-container flex justify-between ">
                        
                                <div className="card-container grid grid-cols-3 gap-5">
                                        
                                        {             
                                                allActors.map((actor) => (
                                                        
                                                        <div className="card" key={actor.id}>
                                                                <div className="card w-96 bg-white shadow-xl">
                                                                        <figure className="pt-4">
                                                                                <img src={actor.img} alt="" className="h-36 w-72" />
                                                                        </figure>
                                                                        <div className="card-body items-center text-center">
                                                                                <h2 className="card-title">{actor.course_name}</h2>
                                                                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                                                                <div className="flex justify-between space-x-20">
                                                                                        <p>Salary: {actor.salary}</p>
                                                                                        <h3>{actor.role}</h3>
                                                                                </div>
                                                                                <div className="card-actions">
                                                                                        <button className="btn btn-wide" onClick={()=>handleSelectBtn(actor)}>Select</button>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                ))
                                        }
                                </div>
                                <div className="cart mr-0">
                                        <h2>This is cart edwqkmknjcsdkjasndxkjnwkdjnwqkdnj</h2>
                                </div>
                        </div>

                </div>


        );
};

export default Home;