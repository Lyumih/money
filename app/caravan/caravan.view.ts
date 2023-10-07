namespace $.$$ {
	export class $money_app_caravan extends $.$money_app_caravan {
		caravan_grab( next?: any ) {
			this.caravan_data( null )
		}

		@$mol_mem
		caravan_data( next?: any ) {
			if( next === undefined ) return undefined
			return this.$.$money_fetch.json( '/caravan/grab' ) as {
				grab: boolean,
				money: number,
			}
		}

		@$mol_mem
		win( next?: any ) {
			if( this.caravan_data() === undefined ) return 'Самое время начать!'
			return ( this.caravan_data()?.grab ? '# Вы ограбили караван на ' : '# Вас самих ограбили на ' ) + this.caravan_data()?.money
		}

	}
}
