import React from "react";
import { Board } from "../component/board.js";
import { ChoosePlayer } from "../component/chooseplayer.js";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			player: null,
			winner: null
		};
	}

	startGame() {
		this.setState({ player: null });
	}

	setTurn(currentPlayer, player1, player2) {
		this.setState({
			player: currentPlayer,
			player1: player1,
			player2: player2
		});
	}

	nextMove(position) {
		this.setState({ player: this.state.player == "x" ? "o" : "x" });
	}

	declareWinner(winner) {
		this.setState({ winner: winner });
	}

	renderMessage() {
		if (this.state.player == null) {
			return <h2 id="message"></h2>;
		} else {
			if (this.state.winner == null) {
				return (
					<div>
						<h2>
							Es el turno de {this.state.player.toUpperCase()}{" "}
						</h2>
						<button onClick={this.startGame.bind(this)}>
							Comenzar de nuevo!
						</button>
					</div>
				);
			} else {
				return (
					<div>
						<div></div>
						<h1 style={{ color: "green" }}>
							{this.state.winner.toUpperCase()} Gano!!!
						</h1>
						<button
							style={{ background: "green" }}
							onClick={this.startGame.bind(this)}>
							Comenzar de nuevo!
						</button>
					</div>
				);
			}
		}
	}

	render() {
		return (
			<div id="msg">
				<h1>Juego de Gato En React</h1>
				{this.renderMessage()}
				<Board
					currentPlayer={this.state.player}
					onMove={this.nextMove.bind(this)}
					onWinner={this.declareWinner.bind(this)}
				/>
				<ChoosePlayer
					hide={this.state.player == null ? true : false}
					onSetTurn={this.setTurn.bind(this)}
				/>
			</div>
		);
	}
}
