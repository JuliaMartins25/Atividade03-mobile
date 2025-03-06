import { RegisterRootComponent } from 'expo';
import { ExpoRoot} from "expo-router";

const app =  () => <ExpoRoot />;

registerRootComponent(app);