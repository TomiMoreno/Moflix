export default function Button(props){
  const styles = {background:'rebeccapurple', color:'white',height:'40px', border:'none',borderRadius:'5px'}
  return(<button className="btn" style={styles}{...props}>{props.children}</button>
  )}