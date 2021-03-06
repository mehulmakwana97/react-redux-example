import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// let AddTodo = ({ dispatch }) => {
//   let input

//   return (
//     <div>
//       <form onSubmit={e => {
//         e.preventDefault()
//         if (!input.value.trim()) {
//           return
//         }
//         dispatch(addTodo(input.value))
//         input.value = ''
//       }}>
//         <input ref={node => {
//           input = node
//         }} />
//         <button type="submit">
//           Add Todo
//         </button>
//       </form>
//     </div>
//   )
// }
// AddTodo = connect()(AddTodo)


class AddTodo extends React.Component {
  dispatch;
  input;
  componentWillMount() {
    const { dispatch } = this.props;
    this.dispatch = dispatch;
  }

  render() {
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!this.input.value.trim()) {
            return
          }
          this.dispatch(addTodo(this.input.value))
          this.input.value = ''
        }}>
          <input ref={node => {
            this.input = node
          }} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}



export default connect()(AddTodo);