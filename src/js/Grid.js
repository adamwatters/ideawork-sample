import React, { Component } from 'react';

const Tile = ({ article }) => {
  const {date, title, presentedBy, imgURL} = article
  return (
    <article className="tile">
      <img src={imgURL} />
      <span>{date}</span>
      <h3>{title}</h3>
      <span>{`Presented by ${presentedBy}`}</span>
    </article>
  );
};

const Grid = ({ articles, breakPoints })  => {
  return (
    <div className="masonry-container">
      <Masonry breakPoints={breakPoints}>
        {articles.map((article, id) => {
          return (
            <Tile article={article} key={id} />
          ) 
        })}
      </Masonry>
    </div>
  )
}

class Masonry extends Component{
  constructor(props){
    super(props);
    this.state = {columns: 1};
    this.onResize = this.onResize.bind(this);
  }
  componentDidMount(){
    this.onResize();
    window.addEventListener('resize', this.onResize)  
  }
  
  getColumns(w){
    return this.props.breakPoints.reduceRight( (p, c, i) => {
      return c < w ? p : i;
    }, this.props.breakPoints.length) + 1;
  }
  
  onResize(){
    const columns = this.getColumns(this.refs.Masonry.offsetWidth);
    if(columns !== this.state.columns){
      this.setState({columns: columns});  
    }
    
  }
  
  mapChildren(){
    let col = [];
    const numC = this.state.columns;
    for(let i = 0; i < numC; i++){
      col.push([]);
    }
    return this.props.children.reduce((p,c,i) => {
      p[i%numC].push(c);
      return p;
    }, col);
  }
  
  render(){
    return (
      <div className="masonry" ref="Masonry">
        {this.mapChildren().map((col, ci) => {
          return (
            <div className="column" key={ci} >
              {col.map((child, i) => {
                return <div key={i} >{child}</div>
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Grid;