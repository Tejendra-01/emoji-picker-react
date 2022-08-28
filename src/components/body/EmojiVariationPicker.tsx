import clsx from 'clsx';
import * as React from 'react';
import {
  emojiHasVariations,
  emojiVariations
} from '../../dataUtils/emojiSelectors';
import { useEmojiStyleConfig } from '../context/PickerConfigContext';
import { useEmojiVariationPickerState } from '../context/PickerContext';
import { Emoji } from '../emoji/Emoji';
import './EmojiVariationPicker.css';

export function EmojiVariationPicker() {
  const [emoji] = useEmojiVariationPickerState();
  const emojiStyle = useEmojiStyleConfig();

  const visible = !!emoji && emojiHasVariations(emoji);

  return (
    <div
      className={clsx('epr-emoji-variation-picker', {
        visible
      })}
    >
      {visible
        ? emojiVariations(emoji).map(unified => (
            <Emoji
              key={unified}
              emoji={emoji}
              unified={unified}
              emojiStyle={emojiStyle}
              showVariations={false}
            />
          ))
        : null}
    </div>
  );
}
