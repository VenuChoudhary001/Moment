import React, { useEffect, useState } from "react";

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 2000
  };

  state = {
    valuesIndex: 0
  };

  componentDidMount() {
    setInterval(() => {
        console.log(this.state.valuesIndex,"Hello")
        if(this.state.valuesIndex < 2)
      this.setState({
        valuesIndex: (this.state.valuesIndex + 1)
      });
      else{
        this.setState({
            valuesIndex:0
        })
      }
    }, this.props.interval);
  }

  render() {
    return this.props.children(this.props.values[this.state.valuesIndex]);
  }
}

export const AhangingProgressProvider=({values,children})=>{
    const [index,setIndex]=useState(0)
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { index });
        }
        return child;
      });
    useEffect(()=>{
        setInterval(()=>{
          if(index < 2){
            setIndex(prev=>prev+1)
          }else{
            setIndex(0);
          }
        },[2000])
    },[])
    return (
        <>
        {childrenWithProps}
        </>
    )
}


export default ChangingProgressProvider;
