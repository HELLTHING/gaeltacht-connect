import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

class ErrorBoundary extends React.Component {
  constructor(props){super(props);this.state={error:null};}
  static getDerivedStateFromError(e){return{error:e};}
  componentDidCatch(e,info){console.error("ErrorBoundary caught:",e,info);}
  render(){
    if(this.state.error){
      return(
        <div style={{minHeight:"100vh",background:"#1B4332",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 24px",textAlign:"center",fontFamily:"sans-serif",color:"#fff"}}>
          <div style={{fontSize:"3.5rem",marginBottom:20}}>☘️</div>
          <h1 style={{fontSize:"1.4rem",marginBottom:8,fontFamily:"Georgia,serif"}}>Rud éigin cearr</h1>
          <p style={{color:"rgba(255,255,255,0.6)",fontSize:"0.88rem",marginBottom:12,lineHeight:1.6}}>
            Something went wrong.<br/>Your progress is safe — just reload.
          </p>
          <p style={{color:"rgba(255,255,255,0.3)",fontSize:"0.7rem",marginBottom:28,lineHeight:1.5,fontFamily:"monospace",wordBreak:"break-all",maxWidth:320,textAlign:"left"}}>
            {this.state.error?.message||this.state.error?.toString()||"Unknown error"}
          </p>
          <button
            onClick={()=>window.location.reload()}
            style={{background:"#fff",border:"none",borderRadius:12,padding:"14px 32px",fontSize:"1rem",fontFamily:"Georgia,serif",fontWeight:700,color:"#1B4332",cursor:"pointer",marginBottom:12,width:"100%",maxWidth:280}}>
            Athlódáil · Reload
          </button>
          <button
            onClick={()=>{localStorage.removeItem("gc3");window.location.reload();}}
            style={{background:"none",border:"1px solid rgba(255,255,255,0.25)",borderRadius:12,padding:"11px 32px",fontSize:"0.8rem",color:"rgba(255,255,255,0.45)",cursor:"pointer",width:"100%",maxWidth:280}}>
            Reset app data
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
