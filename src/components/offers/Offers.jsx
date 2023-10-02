import React, {useEffect, useState} from "react";
import './offers.scss'
function TestForCompo(){
    const [data,setPopularData] = useState();
    const [activeFilter, setActiveFilter] = useState('BP')
    const [offersType , setOffersType] = useState();
    const [content,setContent] = useState();


    const fetchPostData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/movies-shows-by-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contentID:  1}),
      });
      const jsonData = await response.json();
      console.log(jsonData,'jsondata')

        const separatedContent = {};
        jsonData['offers'].forEach(item => {
            const cndCode = item.cnd_code;
            const moni = item.moni;

            if (!separatedContent[cndCode]) {
                separatedContent[cndCode] = {};
            }

            if (!separatedContent[cndCode][moni]) {
                separatedContent[cndCode][moni] = [];
            }

            separatedContent[cndCode][moni].push(item);
        });
      console.log(separatedContent,'separatedContent')
      setContent(separatedContent) ;
      setOffersType(separatedContent['BP']);
      setPopularData(jsonData);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
    // console.log(data,'------')

    useEffect(() => {
    fetchPostData();
  }, []);
  const setFilters = (offersType)=>{
      setOffersType(content[offersType])
      setActiveFilter(offersType)
  }

    return(
        <div className={'margin-left-offers'} style={{position:'relative' ,marginBottom:'20px'}}>
            <div className={'colorWhite padding-headline'}>Where To Watch</div>
            <div className="flex-container-offers-heading" style={{borderStyle:'2px', backgroundColor:'#797a7b',marginLeft:'0px',width:'300px'}}>
                <div className="flex-item font-bold" style={{marginRight:'10px'}}>Filters: </div>
                <span className="flex-item colorBlack" style={{color:activeFilter==='BP'?'white':'black'}} onClick={()=>{setFilters('BP')}}> Best Price </span>
                <div className="flex-item colorBlack" style={{color:activeFilter==='HD'?'white':'black'}} onClick={()=>{setFilters('HD')}}>HD</div>
                <div className="flex-item colorBlack" style={{color:activeFilter==='SD'?'white':'black'}} onClick={()=>{setFilters('SD')}}>SD</div>
                <div className="flex-item colorBlack" style={{color:activeFilter==='4k'?'white':'black'}} onClick={()=>{setFilters('4k')}}>4K</div>
            </div>
            <div> {offersType &&
            <div >
                <div >
                    <div>
                          {Object.keys(offersType).sort().map((key) => (
                            <div key={key}>
                                <div className={'flex-container'}>
                                    <div  className={'flex-item rotate-text-new colorWhite'} style={{backgroundColor:key==='Stream'?'#e6e6e6':(key==='Rent'?'#797a7b':'#1c252f'),color:key==='Stream'?'Black':''}}>{key.toUpperCase()} </div>
                                    {offersType[key].map((item, index) => (

                                      <div key={index} className={'flex-item'}>
                                          <img style={{height:'100px'}} src="https://www.themoviedb.org/t/p/original/jRpQbuHbGR0MzSIBxJjxZxpXhqC.jpg" alt=""/>
                                      </div>

                                    ))}
                                  </div>

                            </div>

                          ))}
                        </div>



                </div>
            </div>
            }</div>
        </div>
    )
}
export default TestForCompo;