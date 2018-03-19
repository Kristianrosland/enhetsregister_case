import React from 'react';
import { connect } from 'react-redux';
import { fetchOrganizationByOrgNr,
         fetchOrganizationByName,
         clearOrganizations } from '../../actions';
import InputField from './InputField';
import OrganizationCard from './OrganizationCard';
import './SearchContainer.css'

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
  }

  render() {
    const organizations = this.props.organizations;
    const organizationCards = organizations
      ? organizations.map(org =>
            <OrganizationCard
              org={org} key={org.organisasjonsnummer}
              isSelected={org === this.state.selected}
              isFetching= {this.props.isFetching}
              onClick={() => this.setState({selected: org}) }
            />
          )
      : null;

    const handleSubmit = input => {
      this.setState({input: input});
      if (input.length < 3)
          this.props.clearOrganizations();
      else if (!isNaN(input)) {
        if (input.length === 9)
          this.props.fetchOrganizationByOrgNr(input);
      } else
        this.props.fetchOrganizationByName(input);
    }

    return (
      <div className='container'>
        <h1> Søk i Enhetsregisteret </h1>
        <InputField submit={ handleSubmit }/>
        { organizationCards }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOrganizationByOrgNr: orgNr => dispatch(fetchOrganizationByOrgNr(orgNr)),
    fetchOrganizationByName: namePrefix => dispatch(fetchOrganizationByName(namePrefix)),
    clearOrganizations: () => dispatch(clearOrganizations()),
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    organizations: state.organizations,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
