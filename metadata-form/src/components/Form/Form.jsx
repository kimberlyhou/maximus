import React, {useState, useRef, useEffect} from 'react'
import './Form.scss'

export default function Form() {
  const [toggle, setToggle] = useState(false)
  const [fileState, setFileState] = useState(false)
  const [lyrics, setLyricsToggle] = useState(false)
  const [obj, setObj] = useState({}) 
  let formRef = useRef()
  let divRef = useRef()
  let fileRef = useRef()
  
   
    function onSubmit(e){
      e.preventDefault()
      //console.log(e.parentNode)
      let form = document.querySelector('form')
      const data = new FormData(form);
      const json = {};
      Array.from(data.entries()).forEach(([key, value]) => {
      json[key] = value;
      })
      setObj(json)
      
      setToggle(true)
      
      
     
    }
    
   
   //console.log(obj['composer'].split(','))
  return (
    <>
    { !toggle ?
    <div className='form-container' >
      <h2>Metadata Writer</h2>         
        <lable>For feilds that have multiple inputs seperate by comma</lable>                     
        <form id='my-form'  method='POST' action="https://intense-spire-76967.herokuapp.com/file" encType='multipart/form-data'>
        <div className="feild">
          
           {/*  <input className='form-control' onChange={() => setFileState(true)} ref={fileRef} id='fup' type='file' name='file'/> */}
            <div id="drop_zone" onDrag={()=>{console.log('jhey')}} onDrop={()=>{console.log('hey')}} className="drag">
              <img className='logo' src={require('../../assets/MAXIMUS-SJA-1B.jpg')}></img>
            </div>
          </div>
          <div className='form-group '> 
       
          
            <div className="feild">
            
            <input placeholder='Full Name' type='text' name='fullName'/>
            </div>
            <div className="feild">
            
            <input placeholder='Last Name' type='text' name='lastName'/>
            </div>
            
            <div className="feild">
            
            <input placeholder='Contact Number' type='text' name='number'/>
            </div>
            <div className="feild">
            
            <input placeholder='Email' type='text' name='Email'/>
            </div>
            <div className="feild">
              <input placeholder='Has this song been previously released or distributed '  />				
                                  
            </div>
            <div className="feild">
            
            <input placeholder='Song Name' type='text' name='title'/>
            </div>
            
           
           
            </div>
            <div className="form-group">
            <div className="feild">
            
            <input placeholder='Artist' type='text' name='artist'/>
            </div>
            <div className="feild">
           
            <input placeholder='BPM' type='text' name='bpm'/>
            </div>
            <div className="feild">
          
            <input placeholder='Inital Key' type='text' name='key'/>
            </div>
            <div className="feild">
          
            <input placeholder='Genre' type='text' name='genre'/>
            </div>
            <div className="feild">
            
            <input placeholder='SongWriter(s)/Composer' type='text' name='composer' />
            </div>
            <div className="feild">
            
            <textarea placeholder='Description' className='form-control' type='text' name='desc'/>      
            </div>
            </div>
           
            <div className='form-group'>
            <div className="feild">
            
             <input placeholder='Intruments' type='text' name='intruments' /> 
              </div>
            <div className="feild">
            
            <input placeholder='Mood/Field' type='text' name='mood' />
            </div>
            <div className="feild">
           
            <input placeholder='Tempo' type='text' name='tempo' />
            </div>
            <div className="feild">
            
            <input placeholder='Keywords' type='text' name='keywords' />
            </div>
            <div className="feild">
            
            <input placeholder='Sounds Like' type='text' name='soundsLike' />
            </div>
            <div className="feild">
           
            <textarea placeholder='Lyrics' className='form-control' type='text' name='lyrics' />
            </div>
        
            </div>
                   
        </form>     

        <div className='button'>             
        {/* <input  className='btn btn-primary' value='Get File' type='submit' form='my-form'  onClick={onSubmit}  /> */}
        <button className='btn btn-primary' onClick={onSubmit}>Get Comment Data</button>
        </div>     
    </div>                   
    :
    <>
    <div className="container">
    
    <div className='grey-container'>
      <div ref={divRef} className="clipboard">
           Song Name: {obj['title']}<br></br>
          Artist: {obj['artist']}<br></br>
          BPM: {obj['bpm']}<br></br>
          Genre: {obj['genre']}<br></br>
          Description: {obj['desc']}<br></br>
          Initial Key: {obj['key']}<br></br>
<br></br>
RIGHTS HOLDERS<br></br>
Songwriter(s): <br></br>
{ obj['composer'].split(',').map((w)=>{
    return <>{w}<br key={w}></br></> 
})} <br></br>

<br></br>
METADATA<br></br>
Keywords: {obj['keywords']} <br></br>
Instruments: {obj['intruments']} <br></br>
Tempo: {obj['tempo']} <br></br>
Mood/Feel: {obj['mood']} <br></br>
Sounds Like: {obj['soundsLike']} <br></br>
<br></br>
SYNC LICENSING
For licensing, please contact: Maxwell Elefant (max@maximusmusicgroup.com ), Stephen Antonelli (stephen@maximusmusicgroup.com)
!!!-ONE STOP READY-!!!

      </div>
      <div className="clipboard">
        <lable>Lyrics: </lable>
        {obj['lyrics']}
        </div>
    </div>
    <button className='btn btn-primary' onClick={()=>setToggle(false)}>Back</button>
   
    
    </div>
    
    </>
}
    </>
  )
}