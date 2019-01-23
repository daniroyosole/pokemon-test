import React, { Component } from 'react';
// You can add Container import in the line above: { Component, Container }
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactLoading from 'react-loading';
import {
  Text,
} from '@Components';
import { capitalize } from '@Utils/utils';
import { getPokemonDetail } from './store/actions';
import {
  DetailWrapper,
  DetailItem,
  Wrapper,
  TitleWrapper,
  Separator,
  ErrorText,
  DetailContainer,
  TextLink,
  TypeItem,
} from './styles';

class PokemonDetail extends Component {
  componentDidMount() {
    const { getPokemonDetail } = this.props;
    if (typeof this.props.match.params.id !== "undefined") {
      getPokemonDetail(parseInt(this.props.match.params.id));
    }
  }

  render() {
    const { detail, loading, error } = this.props;

    return (
      <DetailWrapper>
        <Wrapper borderRight alignItems="center">
          <TitleWrapper>
            <TextLink onClick={this.props.history.goBack}>Pokémunz</TextLink>
          </TitleWrapper>
        </Wrapper>
        <Separator />
        <Wrapper borderRight alignItems="center">
        { error ? <ErrorText>Error... Please go back and try again :)</ErrorText> : null }
        {loading ? <ReactLoading type="spinningBubbles" color="black" height="30px" width="30px"/> : null}
        {typeof detail.name != "undefined" ? 
          <DetailContainer>
            <DetailItem>
              <Text bold>Name:</Text><Text>{capitalize(detail.name)}</Text>
            </DetailItem>
            <DetailItem>
              <Text bold>id:</Text><Text>{detail.id}</Text>
            </DetailItem>
            <Text bold>Types:</Text>
            {typeof detail.types !== "undefined" ? detail.types.map((type, key) => {
              return(
                <TypeItem key={"types-"+key}>
                  <Text>- {capitalize(type.type.name)}</Text>
                </TypeItem>
              )
            }) : null}
            <Text bold>Number of moves:</Text> <Text>{detail.nmoves}</Text>
          </DetailContainer>
        : null}
        </Wrapper>
      </DetailWrapper>
    );
  }
}

const mapStateToProps =  ({ pokemonDetail })  => ({
    detail: pokemonDetail.detail,
    loading: pokemonDetail.loading,
    error: pokemonDetail.error,
});

const mapDispatchToProps = {
  getPokemonDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
