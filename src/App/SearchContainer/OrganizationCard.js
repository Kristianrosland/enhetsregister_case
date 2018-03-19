import React from 'react';
import BankruptSymbol from './BankruptSymbol';
import LinkButton from './LinkButton';
import './SearchContainer.css';

class OrganizationCard extends React.Component {

  getAdditionalInfo = org => {
    const address = org.postadresse ? 'Adresse: ' + org.postadresse.adresse : null;
    const employees = org.antallAnsatte ? `${org.antallAnsatte} ansatte` : null;
    const orgNr = 'Org nr. ' + org.organisasjonsnummer;
    const regDate = org.registreringsdatoEnhetsregisteret
      ? 'Registreringsdato: ' + org.registreringsdatoEnhetsregisteret
      : null;

    return (
      <div className='additional-info'>
        <div> { orgNr } </div>
        <div> { address } </div>
        <div> { employees } </div>
        <div> { regDate } </div>
      </div>
    );
  }

  render () {
    const org = this.props.org;
    if (!org) return null;
    const name = org.navn;

    const bankrupt = org.konkurs === 'J'
      ? <BankruptSymbol />
      : null;

    const additionalInfo = this.props.isSelected
      ? this.getAdditionalInfo(org)
      : null;

    const selectedClass = this.props.isSelected ? 'org-selected' : '';

    return (
      <div
        className={`organization-card box-sizing ${selectedClass}`}
        onClick={this.props.onClick}>
          <div className='information-box'>
            <div className='organization-name'> { name } </div>
            { additionalInfo }
            <div className='link-button-container'>
              <LinkButton icon='home' url={org.hjemmeside} selected={true}/>
            </div>
          </div>
        { bankrupt }
      </div>
    );
  }
}

export default OrganizationCard;
