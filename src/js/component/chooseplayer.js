import React from "react";
import PropTypes from "prop-types";

export class ChoosePlayer extends React.Component {
	constructor(props) {
		super(props);
		this.player1 = null;
		this.player2 = null;
	}

	render() {
		return (
			<div
				style={{ display: this.props.hide ? "block" : "none" }}
				id="modal-container">
				<div className="choose-modal">
					<h3>Escoge tu arma!!!</h3>
					<div>
						<input
							type="text"
							placeholder="Nombre del jugador 1"
							onChange={evt => (this.player1 = evt.target.value)}
						/>
						<input
							type="text"
							placeholder="Nombre del jugador 2"
							onChange={evt => (this.player2 = evt.target.value)}
						/>
					</div>
					<div className="button-area">
						<span
							onClick={() =>
								this.props.onSetTurn(
									"x",
									this.player1,
									this.player2
								)
							}
							className="x-marker">
							X
						</span>
						<span
							onClick={() =>
								this.props.onSetTurn(
									"o",
									this.player1,
									this.player2
								)
							}
							className="o-marker">
							O
						</span>
					</div>
				</div>
				<div className="end-game-modal">
					<h3 />
					<p>Suerte para la proxima vez!!</p>
					<div className="button-area">
						<span>Juega otra vez</span>
					</div>
				</div>
			</div>
		);
	}
}

ChoosePlayer.propTypes = {
	hide: PropTypes.bool,
	onSetTurn: PropTypes.func
};
