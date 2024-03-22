import { Switch } from './ui/switch';
import { useTheme } from '@/hooks/useTheme';

const Lightswitch = () => {
	const { setTheme, theme } = useTheme();
	const changeTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	return (
		<div>
			<Switch
				aria-label='Toggle dark mode'
				onCheckedChange={changeTheme}
			/>
		</div>
	);
};

export default Lightswitch;
