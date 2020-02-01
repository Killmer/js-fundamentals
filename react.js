import React, {Component} from "react";
import ReactDom from "react-dom";

// portals

// class MyPortal extends Component {
//   el = document.createElement('div');

//   componentDidMount() {
//     document.body.appendChild(this.el);
//   }

//   componentWillUnmount() {
//     document.body.removeChild(this.el);
//   }

//   render() {
//     return ReactDOM.createPortal(this.props.children, MyPortal);
//   }
// }

// const ModalWindow = () => {
//     <MyPortal>
//       <span>This is ModalWindow</span>
//     </MyPortal>
// }

// // HOC

// const LoadingHOC = loadingProps => WrapperComponent => {
//   return class LoadingHOC extends Component {
//     render() {
//       return isEmpty(this.props[loadingProps]) ?
//         <div className="loader"></div>
//        :
//         <WrapperComponent {...this.props} />;
//     }
//   };
// };

//Context
const TitleContext = React.createContext();

const FourLevel = () => (
  <TitleContext.Consumer>
    {({title, subtitle}) => (
      <Fragment>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </Fragment>
    )}
  </TitleContext.Consumer>
);

class Lessons extends Component {
  render() {
    return (
      <TitleContext.Provider
        value={{title: "Hero", subtitle: "but still available for kiss"}}
      >
        <FirstLevel></FirstLevel>
      </TitleContext.Provider>
    );
  }
}
