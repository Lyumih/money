namespace $.$$ {
	export class $money_app extends $.$money_app {

		fetch_user() {
			const result = this.$.$mol_fetch.json( 'user' )
		}
	}

	export class $money_fetch extends $.$mol_fetch {
		static json( uri: string ) {
			const BASE_URI = 'http://localhost:3000/api/v1'
			return super.json( BASE_URI + uri )
		}
	}
}
