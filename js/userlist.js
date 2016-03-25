var path = require('./path');
var moment = require('moment');
var React = require('react');
var ReactDOM = require('react-dom');
// var datetime = moment('2016-02-22T10:25:15.000Z');

var API_end = path.HOST+":"+path.PORT+path.BASE_URL+"UserConsumers"

var UserTable = React.createClass({
  getInitialState: function(){
		return ({data:[]});
	},
  getUsers : function(){
  	 $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function () {
  		this.getUsers();
  		setInterval(this.getUsers,this.props.pollInterval)
  	},	
  render: function() {
    return (
      <div className="userTable">
                <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="col-md-3 sortable">
                                    Name
                                </th>
                                <th className="col-md-2 sortable">
                                    <span className="line"></span>Mobile Number
                                </th>
                                <th className="col-md-2 sortable">
                                    <span className="line"></span>Signed Up
                                </th>
                                <th className="col-md-2 sortable">
                                    <span className="line"></span>Last Activity
                                </th>
                                <th className="col-md-2 sortable align-right ">
                                    <span className="line"></span>Email
                                </th>
                            </tr>
                        </thead>
              			<UserList data = {this.state.data}/>
                </table>        
      </div>
    );
  }
});
var UserList = React.createClass({
	render: function(){
		var userRows = this.props.data.map(function(user){
			return(
				<UserRow key={user.id} user={user}></UserRow> 	
				);
		});
		return (
			<tbody className="userList">
				{userRows}
			</tbody>
			);
	}
});
var UserRow = React.createClass({
	render : function(){
		return(
				<tr>
					<td>
						<img src={this.props.user.photo} alt="contact" className="img-circle avatar hidden-phone"/>
						<a className="name">{this.props.user.name}</a>
					</td>
					<td>{this.props.user.mobile}</td>
					<td>{this.props.user.createdAt}</td>
					<td>{this.props.user.updatedAt}</td>
					<td className = "align-right">
					<a href="#">{this.props.user.email}</a>
					</td>		
				</tr>
			);
	}
});

ReactDOM.render(
  <UserTable url={API_end} pollInterval={2000} />,
  document.getElementById('userlist')
);