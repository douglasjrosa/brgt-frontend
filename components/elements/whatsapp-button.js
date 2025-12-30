import Image from './image'
import { useState, useEffect } from 'react'


const WhatsAppButton = props =>
{
	const { media, whatsappLink } = props

	const [ buttonIsClicked, setButtonIsClicked ] = useState( false )

	useEffect( () =>
	{
		if ( buttonIsClicked && whatsappLink )
		{
			window.open( whatsappLink, '_blank' )
		}
	}, [ buttonIsClicked, whatsappLink ] )


	return (
		<div className='z-30'>
			<div className="fixed bottom-10 right-5">
				<button
					className='w-[80px]'
					type="button"
					key="menu-button"
					aria-expanded="true"
					aria-haspopup="true"
					aria-label="Botão Whatsapp"
					onClick={ () => setButtonIsClicked( !buttonIsClicked ) }
				>
					<Image media={ media } width="90" height="90" alternativeText="Ícone do Whatsapp" />
				</button>
			</div>
		</div>
	)
}

export default WhatsAppButton
