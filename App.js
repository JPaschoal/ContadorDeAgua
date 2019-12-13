import React from 'react'
import { Component } from 'react'
import { View, StyleSheet, ImageBackground, Text, Button } from 'react-native'



export default class ContadorDeAguas extends Component {

  constructor(props) {
    super(props)
    this.state = {
      consumido: 0,
      status: 'ruim',
      pct: '0%'
    }

    this.addCopo = this.addCopo.bind(this)
    this.atualizar = this.atualizar.bind(this)

  }

  atualizar() {
    let s = this.state
    s.pct = ((s.consumido / 2000) * 100)
    if (s.pct >= 100) {
      s.status = "Bom"
    }
    else {
      s.status = "Ruim"
    }

    s.pct += "%"

    this.setState(s)
  }

  addCopo() {
    let s = this.state
    s.consumido += 200
    this.setState(s)
    this.atualizar()
  }

  render() {
    return (
      <View style={styles.body}>
        <ImageBackground source={require('./images/waterbg.png')} style={styles.bgimage}>
          <View>
            <View style={styles.infoarea}>
              <View style={styles.area}>
                <Text style={styles.areatitulo}>Meta</Text>
                <Text style={styles.areadado}>2000ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areatitulo}>Consumido</Text>
                <Text style={styles.areadado}>{this.state.consumido}</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areatitulo}>Status</Text>
                <Text style={styles.areadado}>{this.state.status}</Text>
              </View>
            </View>
            <View style={styles.pctarea}>
              <Text style={styles.pcttexto} >{this.state.pct}</Text>
            </View>
            <View style={styles.btnArea}>
              <Button title="Beber 200ml" onPress={this.addCopo} style={styles.botao}></Button>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 20
  },
  bgimage: {
    flex: 1,
    width: null
  },
  infoarea: {
    flexDirection: 'row',
    paddingTop: 70
  },
  area: {
    flex: 1,
    alignItems: 'center'
  },
  areatitulo: {
    color: '#45b2fc',
  },
  areadado: {
    color: '#2b4274',
    fontSize: 15,
    fontWeight: 'bold',
  },
  pctarea: {
    marginTop: 300,
    alignItems: 'center'
  },
  pcttexto: {
    color: '#ffffff',
    fontSize: 80,
  },
  btnArea: {
    marginTop: 30,
    alignItems: 'center',
  },
})