import Markdown from 'react-markdown';
import classNames from 'classnames';
import { MdClose } from 'react-icons/md';

const NotificationBanner = ({ data: { text, type }, closeSelf }) => {
	return (
		<div
			id="notification-banner"
			className={classNames(
				// Common classes
				'text-white px-2 fixed w-full z-40 py-8 bg-opacity-90 bottom-0',
				{
					// Apply theme based on notification type
					'bg-gray-900': type === 'info',
					'bg-yellow-600': type === 'warning',
					'bg-red-600': type === 'alert'
				}
			)}
		>
			<div className="container flex flex-row justify-between items-center ">
				<div className="rich-text-banner flex-1 leading-relaxed text-2xl">
					<Markdown children={text} />
				</div>
				<button
					onClick={closeSelf}
					className="px-1 py-1 flex-shrink-0"
					aria-label="Fechar notificação de cookies"
				>
					<MdClose className="h-6 w-auto" color="#fff" />
				</button>
			</div>
		</div>
	);
};

export default NotificationBanner;
