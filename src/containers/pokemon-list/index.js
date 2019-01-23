import React, { Component } from 'react';
// You can add Container import in the line above: { Component, Container }
import { connect } from 'react-redux';
import {
  Text,
  Input
} from '@Components';
import { getPokemonList } from './store/actions';
import { capitalize } from '@Utils/utils';
import {
  ListWrapper,
  ListItem,
  Wrapper,
  TitleWrapper,
  Separator,
  ListContainer
} from './styles';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

class PokemonList extends Component {
  state = {
    filterText: ''
  }

  componentDidMount = () => {
    if (this.props.pokemonList.length === 0) {
      this.getNextBlock(0);
    }
  }

  getNextBlock = (pageNumber) => {
    const { getPokemonList } = this.props;
    const { filterText } = this.state;

    if (filterText === '') {
      getPokemonList(parseInt(pageNumber));
    }
  }

  handleFilterText = event => {
    this.setState({filterText: event.target.value});
  }

  filterList = (text = '', list = []) => {
    text = text.toLowerCase();
    const updatedList = list.filter(function(item, key){
      item.id = key+1;
      if (typeof item.name === "undefined") return false;
      return (key+1 === parseInt(text) || item.name.toLowerCase().indexOf(text) !== -1);
    });

    return updatedList;
  }

  render() {
    const {
      pokemonList,
      pageNumber,
      location
    } = this.props;
    const { filterText } = this.state;
    const filteredList = pokemonList.length > 0 && filterText.length > 0 ? this.filterList(filterText, pokemonList) : pokemonList;

    return (
      <ListWrapper>
        <Wrapper borderRight alignItems="center">
          <TitleWrapper>
            <Text fontSize={20} bold>Catch'em all!</Text>
          </TitleWrapper>
        </Wrapper>
        <Wrapper>
          <Input placeholder="Search by name or id" errored={filteredList.length === 0} onChange={this.handleFilterText}/>
        </Wrapper>
        <Wrapper borderRight alignItems="center">
          <ListContainer>
            <InfiniteScroll
              height="400px"
              dataLength={filteredList.length}
              next={() => this.getNextBlock(pageNumber+1)}
              hasMore={filteredList.length < 810}
              loader={filteredList.length === 0 || filterText !== '' ? null : <h4>Loading...</h4>}
              endMessage={
                <p style={{textAlign: 'center'}}>
                  <b>Yay! You have caught'em all!</b>
                </p>
              }>
              {filteredList.length > 0 ? filteredList.map((item, key) => {
                return (
                  <ListItem key={"pkm-"+(key+1)}>
                    <Link to={"/"+(item.id ? item.id : key+1)}>
                      <Text>{capitalize(item.name)}</Text>
                    </Link>
                  </ListItem>
                )
              }) : null}
            </InfiniteScroll>
          </ListContainer>
        </Wrapper>
      </ListWrapper>
    );
  }
}

const mapStateToProps =  ({ pokemonList })  => ({
    pokemonList: pokemonList.pokemonList,
    pageNumber: pokemonList.pageNumber
});

const mapDispatchToProps = {
  getPokemonList
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
