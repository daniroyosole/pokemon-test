import React, { Component } from 'react';
// You can add Container import in the line above: { Component, Container }
import { connect } from 'react-redux';
import {
  Text,
} from '@Components';
import ReactLoading from 'react-loading';
import { capitalize } from '@Utils/utils';
import { getPokemonDetail } from './store/actions';
import {
  ListWrapper,
  ListItem,
  Wrapper,
  TitleWrapper,
  Separator,
  ErrorText,
  ListContainer,
  TextLink,
  TypeItem
} from './styles';
import { BrowserRouter as Router } from 'react-router-dom';

class PokemonDetail extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { getPokemonDetail } = this.props;
    if (typeof this.props.match.params.id !== "undefined") {
      getPokemonDetail(parseInt(this.props.match.params.id));
    }
  }

  render() {
    const { detail, loading, error } = this.props;

    return (
      <ListWrapper>
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
          <ListContainer>
            <ListItem>
              <Text>Name:</Text> <Text bold> {capitalize(detail.name)}</Text>
            </ListItem>
            <ListItem>
              <Text>id: {detail.id}</Text>
            </ListItem>
            <Text>Types:</Text>
            {typeof detail.types !== "undefined" ? detail.types.map((type, key) => {
              return(
                <TypeItem key={"types-"+key}>
                  <Text>  -{capitalize(type.type.name)}</Text>
                </TypeItem>
              )
            }) : null}
            <Text>Number of moves: 4</Text>
          </ListContainer>
        : null}
        </Wrapper>
      </ListWrapper>
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
