//Importing Modules
var path = require('./path');
var moment = require('moment');
var React = require('react');
var ReactDOM = require('react-dom');

//Main code
var API_end = path.HOST+":"+path.PORT+path.BASE_URL

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
  getInitialState: function(){
    return ({url:'img/anonym.png'});
  },
  imageResolver: function(){
      if (this.props.user.photo && ['jpg','jpeg','png','bmp'].indexOf(this.props.user.photo.split('.')[1])!=-1)
      {
        var image_url = API_end + "Containers/gmp-consumer-photos/download/" + this.props.user.photo;
        var http = new XMLHttpRequest();

        http.open('HEAD', image_url,false);
        http.send();
        if (http.status === 200)
          this.setState({url:image_url})
      }
  },
	render : function(){
    var createdMoment = moment(this.props.user.createdAt);
    var updatedMoment = moment(this.props.user.updatedAt);
		return(
				<tr>
					<td>
						<img src={this.state.url} width="50px" height="50px" onLoad = {this.imageResolver}  alt="contact" className="img-circle avatar hidden-phone"/>
						<a className="name">{this.props.user.name}</a>
					</td>
					<td>{this.props.user.mobile}</td>
					<td>{createdMoment.format('MMMM Do YYYY, h:mm:ss a')}</td>
					<td>{updatedMoment.format('MMMM Do YYYY, h:mm:ss a')}</td>
					<td className = "align-right">
					<a href="#">{this.props.user.email}</a>
					</td>		
				</tr>
			);
	}
});

ReactDOM.render(
  <UserTable url={API_end+"UserConsumers"} pollInterval={600000} />,
  document.getElementById('userlist')
);