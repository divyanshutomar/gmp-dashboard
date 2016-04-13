var React = require('react');
var CompanyDataBody = require('./CompanyDataBody.jsx');

var ListItem = React.createClass({
	render: function () {

		return (

		  	<li>
		      <div className="collapsible-header"><h5><b>{this.props.dataitem.name}</b></h5></div>
		      <div className="collapsible-body">
			      <div className="row">
				      	<div className="card-panel teal  white-text ">
					      	<a className="waves-effect waves-light btn blue right" >Edit</a>
							<div className="clear-fix"></div>	
				      		<CompanyDataBody dataitem={this.props.dataitem}/>
				      	</div>
					    <a className="waves-effect waves-light btn blue right" >Check Parking Lots</a>
						<div className="clear-fix"></div>		
			      </div>
		      </div>
    		</li>

			);
	}

});

module.exports = ListItem;
