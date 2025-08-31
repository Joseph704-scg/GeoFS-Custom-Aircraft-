function updateControls() {
  const aileronInput = geofs.controls.aileron;

  // Left aileron goes up when turning right
  geofs.aircraft.instance.parts.[Cube.029].rotation.z = aileronInput * 0.5;

  // Right aileron goes down when turning right
  geofs.aircraft.instance.parts.[Cube.030].rotation.z = -aileronInput * 0.5;

  // Other controls (rudder, elevator, etc.)
  geofs.aircraft.instance.parts.[Cube.020].rotation.y = geofs.controls.rudder * 0.5;
  geofs.aircraft.instance.parts.[Cube.028].rotation.x = geofs.controls.elevator * 0.5;
}

geofs.api.addEventListener("frame", updateControls);
