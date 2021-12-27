import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import {
Grid,
List,
Loader,
Dimmer,
Placeholder,
Segment,
Button,
Divider,
Header,
Icon,
Image,
Search,
Container,
Table,
Menu,
Label
} from "semantic-ui-react";

class App extends Component {
  render(){
    return(
      <div>
      <br />

        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable textAlign='center'>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Header as='h2' icon>
                <Icon name='search' />
                Cari Document
              </Header>
              <p><Search placeholder='Cari Dokument' /></p>
            </Grid.Column>
            <Grid.Column>
              <Header as='h2' icon>
                <Icon name='file pdf outline' />
                Tambah Document Baru
              </Header>
              <Button primary content='Sign up' icon='signup'>Create Document</Button>
            </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider vertical>Or</Divider>
        </Segment>
        <br />
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>

        <br />

        <Grid>
          <Grid.Column width={5}>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column width={7}>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
          <List>
              <Header as='h3'>Website Terkait</Header>
             <List.Item icon='linkify' content={<a href='/'>Google</a>} />
             <List.Item icon='linkify' content={<a href='/'>facebook</a>} />
             <List.Item icon='linkify' content={<a href='/'>semantic ui</a>} />
             <List.Item icon='linkify' content={<a href='/'>Niomic</a>} />
             <List.Item icon='linkify' content={<a href='/'>react</a>} />
           </List>
          </Grid.Column>
        </Grid>
        <br /><br /><br />
        <Container>
          <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="right" colSpan='2'><Search placeholder='Search Document...' /></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Nama Document</Table.HeaderCell>
                <Table.HeaderCell>Jenis File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell positive>
                  <Label ribbon>Panduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar CSS</Table.Cell>
                <Table.Cell>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar React JS</Table.Cell>
                <Table.Cell>PDF</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>

      </div>
    )
  }
}
export default App;
