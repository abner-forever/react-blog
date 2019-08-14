import React from 'react'

var styles = {
  'title': {
    paddingLeft: '20px',
    paddingRight: '50px',
    position: 'relative'
  },
  'delete': {
    marginLeft: '20px',
    marginRight: '50px'
  }
}

class AppTodos extends React.Component {
  render () {
    return (
      <div className='comment' onClick={()=>this.props.checkItems(this.props.id)}>
        <div className='content'>
          <span 
               className='author' 
                style={styles.title} 
          >
              {this.props.text}
              <span 
                   className={this.props.complete ? 'line' : ''} 
              />
          </span>
          <span className='author' 
                style={styles.title}>
                {this.props.complete ? '已完成' : '未完成'}
          </span>
          <span className='author' 
                style={styles.title}>
                {this.props.isCheck ? '选中' : '未选中'}
          </span>
          <span className='author'>{this.props.id}</span>
        </div>
      </div>
    )
  }
}

export default AppTodos;