import React from 'react'
import fresh from '../../src/Assets/fresh.PNG'
import notes from '../../src/Assets/notes.PNG'
import movie from '../../src/Assets/movie.PNG'
import weather from '../../src/Assets/wether.PNG'
import game from '../../src/Assets/game.PNG'
import quiz from '../../src/Assets/quiz.PNG'
import devolio from '../../src/Assets/evolio.PNG'
import special from '../../src/Assets/special.PNG'
import maily from '../../src/Assets/maily.PNG'
import crud from '../../src/Assets/crud.PNG'
import temp from '../../src/Assets/temp.PNG'

export default function Tabs() {
  return <>

  <div className='projects py-5 px-4' id='projects'>
    <h1 className='mt-4 mb-5'>Projects</h1>
    <div className='row g-5'>
        <div className='col-md-3'>
            <div className='item'>
            
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                 <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">All Projects</button>
                 <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">React Js</button>
   
                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">JavaScript</button>
                 <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">html&css</button>
         </div>
            </div>
            
        </div>
        <div className='col-md-9'>
        <div className="tab-content" id="v-pills-tabContent">
    <div className="tab-pane fade show active text-light" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">
        <div className='row g-4'>
            <div className='col-md-3'>
                <div className='item1 h-100 '>
                    <img className='w-100' src={fresh} alt="" />
                  
                   <div className='my-4'>
                   <h3 className='light'>Fresh Cart</h3>
                    <p className='para'>Fresh cart is a comprehensive e-commerce solution using Reactjs formik yup context</p>
                   </div>
                    <div>
                    <a className='text-primary' href="https://ahmedtoukhy7.github.io/fresh-Cart/">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                    </div>
                   
                </div>
            </div>
            <div className='col-md-3'>
                <div className='item1 h-100 '>
                    <img className='w-100' src={movie} alt="" />
                   <div className='my-4'>
                   <h3 className='light '>Movie Db</h3>
                    <p className='para'>The Movie Database (TMDB) is a comprehensive Movie solution using Rectjs Redux-toolkit</p>
                   </div>
                    <a className='text-primary ' href="https://ahmedtoukhy7.github.io/movie-database/">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                        
                    </a>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='item1 h-100 '>
                    <img className='w-100' src={maily} alt="" />
                   <div className='my-4'>
                   <h3 className='light '>Meaily</h3>
                    <p className='para'>The Meaily is a comprehensive Restaurant solution using html css bootstrap</p>
                   </div>
                    <a className='text-primary ' href="https://ahmedtoukhy7.github.io/meaily/">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='item1 h-100 position-relative'>
                    <img className='w-100' src={notes} alt="" />
                    <div className='my-4'>
                    <h3 className='light'>Notes App</h3>
                    <p className='para mb-5'>The Notes is  a comprehensive Notes App solution using Reactjs formik </p>
                    </div>
                    <a className='text-primary' href="https://ahmedtoukhy7.github.io/notes-app/">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='item1 h-100 '>
                    <img className='w-100' src={weather} alt="" />
                    <h3 className='light my-3'>Weather App</h3>
                    <p className='para'>The Weather is  a comprehensive Weather solution using html css bootstrap JavaScript</p>
                    <a className='text-primary ' href="https://ahmedtoukhy7.github.io/Weather-App/">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='item1 h-100'>
                    <img className='w-100' src={quiz} alt="" />
                    <h3 className='light my-3'>Quiz App</h3>
                    <p className='para'>The Quiz App is  a comprehensive quiz solution using html css bootstrap JavaScript</p>
                    <a className='text-primary' href=" https://ahmedtoukhy7.github.io/Quiz-App/">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='item1 h-100'>
                    <img className='w-100' src={game} alt="" />
                    <h3 className='light my-3'>Game App</h3>
                    <p className='para'>The game App is a comprehensive game solution using html css bootstrap JavaScript</p>
                    <a className='text-primary' href="https://ahmedtoukhy7.github.io/Game-Api/">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='item1 h-100 '>
                    <img className='w-100' src={devolio} alt="" />
                    <h3 className='light my-3'>Devolio</h3>
                    <p className='para'>The Devolio App is  a comprehensive portifolio solution using html css bootstrap </p>
                    <a className='text-primary' href="https://ahmedtoukhy7.github.io/Devolio/">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>


    </div>
    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
    <div className='row'>
    <div className='col-md-3'>
                <div className='item1 h-100'>
                    <img className='w-100' src={fresh} alt="" />
                    <h3 className='light my-3'>Fresh Cart</h3>
                    <p className='para'>Fresh cart is a comprehensive e-commerce solution using Reactjs formik yup context</p>
                    <a className='text-primary' href="https://ahmedtoukhy7.github.io/fresh-Cart/">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='item1 h-100'>
                    <img className='w-100' src={movie} alt="" />
                    <h3 className='light my-3'>Movie Db</h3>
                    <p className='para'>The Movie Database (TMDB) is a comprehensive Movie solution using Rectjs Redux-toolkit
</p>
                    <a className='text-primary' href="https://ahmedtoukhy7.github.io/movie-database/">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                        
                    </a>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='item1 h-100'>
                    <img className='w-100' src={notes} alt="" />
                    <div className='my-4'>
                    <h3 className='light my-3'>Notes App</h3>
                    <p className='para'>The Notes is  a comprehensive Notes App solution using Reactjs formik</p>
                    </div>
                    <a className='text-primary' href="https://ahmedtoukhy7.github.io/notes-app/">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
            
        </div>
    </div>
   
    <div className="tab-pane fade text-light" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">
    <div className='row g-4'>
    <div className='col-md-3'>
                <div className='item1 h-100'>
                    <img className='w-100' src={quiz} alt="" />
                    <h3 className='light my-3'>Quiz App</h3>
                    <p className='para'>The Quiz App is  a comprehensive quiz solution using html css bootstrap JavaScript</p>
                    <a className='text-primary' href=" https://ahmedtoukhy7.github.io/Quiz-App/">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='item1 h-100'>
                    <img className='w-100' src={game} alt="" />
                    <h3 className='light my-3'>Game App</h3>
                    <p className='para'>The game App is a comprehensive game solution using html css bootstrap JavaScript</p>
                    <a className='text-primary' href="https://ahmedtoukhy7.github.io/Game-Api/">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='item1 h-100'>
                    <img className='w-100' src={crud} alt="" />
                    <h3 className='light my-3'>Cruds System</h3>
                    <p className='para'>The crud System is a comprehensive Crud solution using html css bootstrap JavaScript</p>
                    <a className='text-primary' href="https://ahmedtoukhy7.github.io/cruds-system/">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='item1 h-100'>
                    <img className='w-100' src={weather} alt="" />
                    <h3 className='light my-3'>Weather App</h3>
                    <p className='para'>The Weather is  a comprehensive Weather solution using html css bootstrap JavaScript</p>
                    <a className='text-primary' href="https://ahmedtoukhy7.github.io/Weather-App/">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='item1 h-100'>
                    <img className='w-100' src={special} alt="" />
                    <h3>Special Design</h3>
                    <p>The Special is  a comprehensive Special Design solution using html css bootstrap JavaScript.</p>
                    <a className='text-primary' href="">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
            
        </div>
    </div>
    <div className="tab-pane fade text-light" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex="0">
        <div className='row'>
            <div className='col-md-3'>
                <div className='item1 h-100'>
                    <img className='w-100' src={maily} alt="" />
                    <h3 className='light my-3'>Meaily</h3>
                    <p className='para'>The Meaily is  a comprehensive Restaurant solution using html css bootstrap</p>
                    <a className='text-primary' href="https://ahmedtoukhy7.github.io/meaily/">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='item1 h-100 '>
                    <img className='w-100' src={devolio} alt="" />
                    <h3 className='light my-3'>Devolio</h3>
                    <p className='para'>The Devolio App is  a comprehensive portifolio solution using html css bootstrap </p>
                    <a className='text-primary' href="https://ahmedtoukhy7.github.io/Devolio/">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>
         </div>
        <div className='col-md-3'>
                <div className='item1 h-100 '>
                    <img className='w-100' src={temp} alt="" />
                    <h3 className='light my-3'>Dashboard</h3>
                    <p className='para'>The dashboard App is a comprehensive dashboard solution using for esign html and css  </p>
                    <a className='text-primary' href="https://ahmedtoukhy7.github.io/Devolio/">
                        more 
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>
         </div>
        </div>
        
    </div>
  </div>
</div>
        </div>
    </div>
  
  
  </>
}
