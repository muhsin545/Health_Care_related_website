import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <>
            <h1 className='my-5 text-center text-success'>Blogs</h1>
            <div class="row row-cols-1 row-cols-md-2 mx-auto g-4 my-5 container">

                <div class="col text-center ">

                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Corona Virus Death Update in Bangladesh and New affected...</h5>
                            <p class="card-text">Bangladesh reported 10 fresh fatalities from Co-19 while the caseload jumped by 339.

                                With the latest dev., the total number of deaths reached 27,778, while the number of total infections rose to 1,565,827 in the country.
                                another 509 patients recovered from the infectious disease across the country,

                                As many as 18,812 samples were tested across the country, yielding a positivity rate of 1.8%.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://www.atlanticcouncil.org/wp-content/uploads/2020/03/Russia-internet-corona-large.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Russia orders tech platforms to remove coronavirus “fake news”</h5>
                            <p class="card-text">The Russian government has been actively engaged in spreading disinformation and misinformation around the pandemic. The Kremlin has also been active in ordering internet platforms operating in the country to remove coronavirus “fake news” from their platforms, which follows previous Kremlin efforts to crack down on independent internet sites offering legitimate news.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://www.aljazeera.com/wp-content/uploads/2021/03/000_94L8CF.jpg?resize=770%2C513" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Germany, France, Italy and Spain halt use of AstraZeneca vaccine</h5>
                            <p class="card-text">Germany, France, Italy and Spain have suspended the use of AstraZeneca’s COVID-19 vaccine after several reports of blood clots in people who received the shot in Europe.

                                The flurry of suspensions on Monday came after a number of other countries, mostly in Europe, halted their rollouts late last week.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://img.freepik.com/free-photo/covid-19-vaccine-ampoule-with-syringe-mask-coronavirus_181624-46183.jpg?size=338&ext=jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Precision health: Predicting and preventing disease — not just treating it</h5>
                            <p class="card-text">“Precision health is a way of translating data into information that can lead us to take care of our health in a way that we might not have done before,” Minor said. “We are poised to have a whole new level of precision in maintaining health.”
                                the Stanford Medicine comunity at the Li Ka Shing Center for Learning and Knowledge.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;