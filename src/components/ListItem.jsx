var React = require('react');

var ListItem = React.createClass({
	render: function () {

		return (

		  	<li>
		      <div className="collapsible-header"><h5><b>{this.props.data.name}</b></h5></div>
		      <div className="collapsible-body">
			      <div className="row">
				      <div className="card-panel teal  white-text ">
					      	<a className="waves-effect waves-light btn blue right" >Edit</a>
							<div className="clear-fix"></div>	
				      		<dl>
				      			<dt>Address</dt>
				      			<dd>{this.props.data.address}</dd>
				      		</dl>
				      		<dl>
				      			<dt>City</dt>
				      			<dd>{this.props.data.city}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Email</dt>
				      			<dd>{this.props.data.email}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Contact Number</dt>
				      			<dd>{this.props.data.contactNumber}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Website</dt>
				      			<dd>{this.props.data.website}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Contractor</dt>
				      			<dd>{this.props.data.contractor}</dd>
				      		</dl>
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
