# Physics Puzzle Lab Architecture

## Core Rule

Levels are variables. Assets are global resources.

A level must describe gameplay data only. It must not own assets.

## Level Data

Levels are JSON driven:

- object type
- position
- physics parameters
- behavior parameters
- asset id reference

Example:

```json
{
  "type": "ball",
  "x": 100,
  "y": 200,
  "skin": "default_ball"
}
```

## Global Assets

Assets are managed globally:

```
assets/
  objects/
  ui/
  effects/
  themes/
```

Objects reference asset IDs, not file paths.

## Systems

- LevelLoader: converts level data into objects
- ObjectFactory: creates game entities by type
- AssetManager: resolves global assets
- Entity: contains object behavior

## Development Rule

New levels should require no code changes.
New assets should require no level rewrites.
New object types should be added through registration.
