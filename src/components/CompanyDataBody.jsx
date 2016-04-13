var React = require('react');

var CompanyDataBody = React.createClass({
	render: function () {
		return (		
						<div>
							<dl>
				      			<dt>Address</dt>
				      			<dd>{this.props.dataitem.address}</dd>
				      		</dl>
				      		<dl>
				      			<dt>City</dt>
				      			<dd>{this.props.dataitem.city}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Email</dt>
				      			<dd>{this.props.dataitem.email}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Contact Number</dt>
				      			<dd>{this.props.dataitem.contactNumber}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Website</dt>
				      			<dd>{this.props.dataitem.website}</dd>
				      		</dl>
				      		<dl>
				      			<dt>Contractor</dt>
				      			<dd>{this.props.dataitem.contractor}</dd>
				      		</dl>
				      	</div>	
			);
	}
});
module.exports = CompanyDataBody;